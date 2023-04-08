import React from "react";
import { MetaProps } from "../types/layout";
import Decorations from "./Decorations";
import Head from "./Head";
import Navigation from "./Navigation";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <Navigation />
      <main className="bg-white">
        <div className="relative isolate">
          <Decorations />
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-40 lg:px-8">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
