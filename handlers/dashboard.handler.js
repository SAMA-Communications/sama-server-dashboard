import { Messages } from "../resources/messages.js";
import { Users } from "../resources/users.js";
import { Conversations } from "../resources/conversations.js";

const dayInSec = 24 * 60 * 60 * 1000;
let currentDate = new Date();

export const dashboardHandler = async (request, response, context) => {
  // * ---- Users ---- * //
  const users_total = await Users.resource.count();
  const users_last_month = await Users.resource.count({
    created_at: { $gte: new Date(new Date() - 30 * dayInSec) },
  });

  // ---- user_per_day ---- //
  const aggregateDayResult = await Users.resource.aggregate([
    {
      $match: {
        created_at: { $gte: new Date(new Date() - 30 * dayInSec) },
      },
    },
    {
      $group: {
        _id: {
          day: { $dayOfMonth: "$created_at" },
          month: { $month: "$created_at" },
          year: { $year: "$created_at" },
        },
        count: { $sum: 1 },
      },
    },
  ]);

  const users_per_day_map = new Map();

  aggregateDayResult.forEach((result) => {
    const date = `${result._id.day}.${result._id.month}`;
    users_per_day_map.set(date, {
      date,
      year: result._id.year,
      day: result._id.day,
      month: result._id.month,
      count: result.count,
    });
  });

  const users_per_day = [];

  for (let i = 0; i < 30; i++) {
    const dateKey = `${currentDate.getDate()}.${currentDate.getMonth() + 1}`;
    if (users_per_day_map.has(dateKey)) {
      users_per_day.push(users_per_day_map.get(dateKey));
    } else {
      users_per_day.push({
        date: dateKey,
        year: currentDate.getFullYear(),
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        count: 0,
      });
    }
    currentDate.setDate(currentDate.getDate() - 1);
  }

  users_per_day.sort(
    (a, b) =>
      new Date(b.year, b.month - 1, b.day) -
      new Date(a.year, a.month - 1, a.day)
  );
  // ---- user_per_day ---- //

  // ---- user_per_month ---- //
  const aggregateMonthResult = await Users.resource.aggregate([
    {
      $match: {
        created_at: { $gte: new Date(new Date() - 365 * dayInSec) },
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$created_at" },
          month: { $month: "$created_at" },
        },
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        date: {
          $concat: [
            { $toString: "$_id.month" },
            ".",
            { $toString: "$_id.year" },
          ],
        },
        year: "$_id.year",
        month: "$_id.month",
        count: 1,
      },
    },
    {
      $sort: {
        date: 1,
      },
    },
  ]);

  const allMonths = [];
  for (let i = 0; i < 12; i++) {
    allMonths.push(
      `${currentDate.getMonth() + 2}.${currentDate.getFullYear()}`
    );
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  const users_per_month_map = new Map(
    aggregateMonthResult.map((result) => [result.date, result])
  );

  const users_per_month = allMonths.map((date) => {
    const [month, year] = date.split(".").map((el) => +el);
    return users_per_month_map.get(date) || { count: 0, date, year, month };
  });

  users_per_month.sort(
    (a, b) => new Date(b.year, b.month - 1) - new Date(a.year, a.month - 1)
  );
  // ---- user_per_month ---- //

  const usersStatistics = {
    users_total,
    users_last_month,
    users_per_day,
    users_per_month,
  };

  // * ---- Messages ---- * //
  currentDate = new Date();

  const messages_total = await Messages.resource.count();
  const messages_last_month = await Messages.resource.count({
    created_at: { $gte: new Date(new Date() - 30 * dayInSec) },
  });

  // ---- messages_per_day ---- //
  const aggregateDayResult_m = await Messages.resource.aggregate([
    {
      $match: {
        created_at: { $gte: new Date(new Date() - 30 * dayInSec) },
      },
    },
    {
      $group: {
        _id: {
          day: { $dayOfMonth: "$created_at" },
          month: { $month: "$created_at" },
          year: { $year: "$created_at" },
        },
        count: { $sum: 1 },
      },
    },
  ]);

  const messages_per_day_map = new Map();

  aggregateDayResult_m.forEach((result) => {
    const date = `${result._id.day}.${result._id.month}`;
    messages_per_day_map.set(date, {
      date,
      year: result._id.year,
      day: result._id.day,
      month: result._id.month,
      count: result.count,
    });
  });

  const messages_per_day = [];

  for (let i = 0; i < 30; i++) {
    const dateKey = `${currentDate.getDate()}.${currentDate.getMonth() + 1}`;
    if (messages_per_day_map.has(dateKey)) {
      messages_per_day.push(messages_per_day_map.get(dateKey));
    } else {
      messages_per_day.push({
        date: dateKey,
        year: currentDate.getFullYear(),
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        count: 0,
      });
    }
    currentDate.setDate(currentDate.getDate() - 1);
  }

  messages_per_day.sort(
    (a, b) =>
      new Date(b.year, b.month - 1, b.day) -
      new Date(a.year, a.month - 1, a.day)
  );
  // ---- messages_per_day ---- //

  const messagesStatistics = {
    messages_total,
    messages_last_month,
    messages_per_day,
  };

  // * ---- Conversations ---- * //
  currentDate = new Date();

  const conversations_total = await Conversations.resource.count({});
  const conversations_last_month = await Conversations.resource.count({
    created_at: { $gte: new Date(new Date() - 30 * dayInSec) },
  });

  // ---- conversations_per_day ---- //
  const aggregateDayResult_c = await Conversations.resource.aggregate([
    {
      $match: {
        created_at: { $gte: new Date(new Date() - 30 * dayInSec) },
      },
    },
    {
      $group: {
        _id: {
          day: { $dayOfMonth: "$created_at" },
          month: { $month: "$created_at" },
          year: { $year: "$created_at" },
        },
        count: { $sum: 1 },
      },
    },
  ]);

  const conversations_per_day_map = new Map();

  aggregateDayResult_c.forEach((result) => {
    const date = `${result._id.day}.${result._id.month}`;
    conversations_per_day_map.set(date, {
      date,
      year: result._id.year,
      day: result._id.day,
      month: result._id.month,
      count: result.count,
    });
  });

  const conversations_per_day = [];

  for (let i = 0; i < 30; i++) {
    const dateKey = `${currentDate.getDate()}.${currentDate.getMonth() + 1}`;
    if (conversations_per_day_map.has(dateKey)) {
      conversations_per_day.push(conversations_per_day_map.get(dateKey));
    } else {
      conversations_per_day.push({
        date: dateKey,
        year: currentDate.getFullYear(),
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        count: 0,
      });
    }
    currentDate.setDate(currentDate.getDate() - 1);
  }

  conversations_per_day.sort(
    (a, b) =>
      new Date(b.year, b.month - 1, b.day) -
      new Date(a.year, a.month - 1, a.day)
  );
  // ---- conversations_per_day ---- //

  const conversationsStatistics = {
    conversations_total,
    conversations_last_month,
    conversations_per_day,
  };

  return { messagesStatistics, usersStatistics, conversationsStatistics };
};
