import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export function DayJS() {
  const now = dayjs().format();

  dayjs.extend(relativeTime);

  const d = new Date(2021, 5, 25);
  const dday = dayjs(d).format();
  const formatWithSlice = dayjs(d).format("DD/MM/YYYY");
  const fromNowTime = dayjs(d).fromNow();
  const fromXTime = dayjs("2004-6-16").from(d);

  return (
    <>
      <h1 className="mb-5">this is from dayjs</h1>
      <table className="border-2 border-blue-600">
        <thead>
          <tr>
            <th className="p-3 bg-slate-100">Format</th>
            <th className="p-3 bg-slate-100">Example</th>
            <th className="p-3 bg-slate-100">Reference</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="p-3 ">Now</th>
            <td className="p-3 ">{now}</td>
            <td className="p-3 ">
              <a
                target="_blank"
                href="https://day.js.org/docs/en/parse/now"
                className="hover:underline"
              >
                link Now
              </a>
            </td>
          </tr>
          <tr>
            <th className="p-3 ">Date</th>
            <td className="p-3 ">{dday}</td>
            <td className="p-3 ">
              <a
                target="_blank"
                href="https://day.js.org/docs/en/parse/date"
                className="hover:underline"
              >
                link Date
              </a>
            </td>
          </tr>
          <tr>
            <th className="p-3 ">Format Slice</th>
            <td className="p-3 ">{formatWithSlice}</td>
            <td className="p-3 ">
              <a
                target="_blank"
                href="https://day.js.org/docs/en/display/format"
                className="hover:underline"
              >
                link Format
              </a>
            </td>
          </tr>
          <tr>
            <th className="p-3 ">From Now</th>
            <td className="p-3 ">{fromNowTime}</td>
            <td className="p-3 ">
              <a
                target="_blank"
                href="https://day.js.org/docs/en/display/from-now"
                className="hover:underline"
              >
                link
              </a>
            </td>
          </tr>
          <tr>
            <th className="p-3 ">From X Time</th>
            <td className="p-3 ">{fromXTime}</td>
            <td className="p-3 ">
              <a
                target="_blank"
                href="https://day.js.org/docs/en/display/from"
                className="hover:underline"
              >
                link
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
