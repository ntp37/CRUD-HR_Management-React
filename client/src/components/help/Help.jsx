import { Grid, Button } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import helpData from "./helpData";

export default function Help() {
  return (
    <>
      <div className="min-h-screen w-full font-OpenSans">
        <Navbar />
        <div className="flex pt-14 bg-slate-100">
          <div className="w-72 hidden lg:block"></div>
          <div className="content-main flex-1 overflow-hidden">
            <div className="showContent w-full flex flex-col mx-auto py-10 px-3 md:px-10 overflow-hidden">
              <div className="container p-2 sm:p-5 sm:mx-auto flex flex-col">
                <h1 className="mb-4 font-semibold text-2xl sm:text-4xl text-center sm:text-start">Help</h1>
                <div className="bg-white mt-5 p-4 sm:p-8 shadow-xl">
                  <p className="font-semibold text-xl sm:text-2xl mb-5">All Topic</p>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {helpData.map((topic) => (
                      <div className="flex flex-col p-5 space-y-2 shadow-xl gap-3 border rounded-xl"key={topic.topic}>
                        <h5 className="font-semibold">{topic.topic}</h5>
                        {topic.details.map((detail, index) => (
                          <a href="#" key={index} className="hover:text-red-500 text-blue-500">{detail}</a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white mt-7 p-4 sm:p-8 shadow-xl">
                  <p className="font-semibold text-xl sm:text-2xl mb-4">
                    If you need help with anything. You can type your question
                    in this form.
                  </p>
                  <form>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Topic</label>
                      <input
                        className="w-full h-12 shadow-sm border p-2 focus-visible:outline-none focus:outline-none rounded-md focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        type="text"
                        placeholder="Write your topic"
                        required
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 mt-4 mb-6">
                      <label className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">Details</label>
                      <textarea
                        className="h-32 w-full shadow-sm border p-2 focus-visible:outline-none focus:outline-none rounded-md focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Write your question"
                        required
                      ></textarea>
                    </div>
                    <Grid item md={6}>
                      <Button variant="contained" type="submit">SUBMIT</Button>
                    </Grid>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
