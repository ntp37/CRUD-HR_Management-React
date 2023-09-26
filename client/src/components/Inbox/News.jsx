import { PersonOutline, EditCalendarOutlined } from "@mui/icons-material";

export default function News({ data }) {
  
  return (
    <>
      {data.map((news, index) => (
        <div className="flex w-full justify-center py-6 border-b-2 border-b-blue-600 px-5" key={index}>
          <div className="card flex flex-col max-w-2xl p-3">
            <img src={news.image} className="w-full" />
            <div className="border-b mt-5 pb-3">
              <p className="font-semibold text-base sm:text-xl">{news.subject}</p>
              <p className="text-sm sm:text-lg mt-2">{news.detail}</p>
            </div>
            <div className="flex flex-col mt-3 gap-2">
              <div className="flex">
                <PersonOutline sx={{fontSize: {sm: 24, xs: 18}}} />
                <span className="ml-2 text-xs sm:text-base">{news.by}</span>
              </div>
              <div className="flex">
                <EditCalendarOutlined sx={{fontSize: {sm: 24, xs: 18}}} />
                <span className="ml-2 text-xs sm:text-base">{news.day}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
