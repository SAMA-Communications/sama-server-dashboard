import { Messages } from "../resources/messages.js";
import { Users } from "../resources/users.js";
import { Conversations } from "../resources/conversations.js";

export const dashboardHandler = async (request, response, context) => {
  console.log(request);
  const messages = await Messages.resource.find({});
  const usersAll = await Users.resource.find({});
  const conversations = await Conversations.resource.find({});

  let count_total = 0;
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const usersStatistics = (
    await Users.resource.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$created_at" },
            month: { $month: "$created_at" },
          },
          count_per_month: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          year: { $toInt: "$_id.year" },
          month: { $toInt: "$_id.month" },
          count_per_month: 1,
        },
      },
      {
        $sort: {
          year: 1,
          month: 1,
        },
      },
    ])
  ).map((obj) => {
    obj.month = months[obj.month];
    count_total += obj.count_per_month;
    return { ...obj, count_total };
  });

  return { messages, usersStatistics, usersAll, conversations };
};
