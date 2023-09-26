import { useState, useEffect } from "react";
import { MessageOutlined, NewspaperOutlined } from "@mui/icons-material";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import InboxData from "./InboxData";
import Message from "./Message";
import News from "./News";
import Navbar from "../Navbar/Navbar";
import "./react-tabs-custom_style.css"

const messageType = InboxData.filter((typeName) => typeName.type === "message");
const newsType = InboxData.filter((typeName) => typeName.type === "news");

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight}
}

export default function Inbox() {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentWindowSize, setCurrentWindowSize] = useState(getWindowSize())
  const currentWidth = currentWindowSize.innerWidth

  useEffect(() => {
    const handleWindowResize = () => setCurrentWindowSize(getWindowSize())
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)


  }, [])

  return (
    <>
      <div className="min-h-screen w-full font-OpenSans">
        <Navbar />
        <div className="flex min-h-screen pt-14 bg-slate-100">
          <div className="w-72 hidden lg:block"></div>
          <div className="content-main flex-1 overflow-hidden">
            <div className="showContent flex flex-col max-w-7xl mx-auto p-5 sm:p-10">
              <h1 className="mb-4 font-semibold text-2xl sm:text-4xl text-center sm:text-start">Inbox</h1>
              <Tabs selectedIndex={tabIndex} onSelect={(index => setTabIndex(index))} className="shadow-lg bg-slate-50">
                <TabList>
                  <Tab>
                    <div className="flex flex-col items-center font-semibold text-sm sm:text-base">
                      <MessageOutlined />
                      Message
                    </div>
                  </Tab>
                  <Tab>
                    <div className="flex flex-col items-center font-semibold text-sm sm:text-base">
                      <NewspaperOutlined />
                      {currentWidth < 390 ? "News" : "News & Highlight"}
                    </div>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Message data={messageType} />
                </TabPanel>
                <TabPanel>
                  <News data={newsType} />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
