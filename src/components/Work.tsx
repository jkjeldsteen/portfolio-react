import React from "react";
import "./styles/Work.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Work() {
  return (
    <div className="projects-wrapper">
      <div className="main-content">
        <div className="projects-container">
          <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Game development
              </CardTitle>
              <CardDescription className="text-sm mt-2">
                Sparetime
              </CardDescription>
            </CardHeader>
            <CardContent>
              I make video games in my spare time mostly using the Unity game
              engine. Check it out here. I have for example reinterpreted
              Asteroids, Geometry Dash, and Doodle Jump. And then I've also made
              a couple of my own games. I really think you should check out my
              tower defense inspired game Gold mine defender
            </CardContent>
            <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
              <div className="flex items-center space-x-1">
                <Badge className="text-white whitespace-nowrap">C#</Badge>
                <Badge className="text-white whitespace-nowrap">Unity</Badge>
              </div>
              <div className="flex-1 text-center">
                <a
                  href="https://jkjeldsteen.itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant={"outline"}>Gold Mine Defender</Button>
                </a>
              </div>
              <div>
                <span>2015-now</span>
              </div>
            </CardFooter>
          </Card>
          <a
            href="https://blackcapitaltechnology.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Black Capital Technology - Want to learn more? Click me
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  Backend Developer Intern
                </CardDescription>
              </CardHeader>
              <CardContent>
                As part of my search for a job, I went into an internship with
                Black Capital Technology as a backend developer on some internal
                projects. I gained experience as a backend developer using the
                Go programming language. I was also introduced to working in a
                small team combined of remote and on-site workers.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="text-white whitespace-nowrap">GoLang</Badge>
                  <Badge className="text-white whitespace-nowrap">Stripe</Badge>
                </div>
                <div>
                  <span>July 1st, 2024 - July 31st, 2024</span>
                </div>
              </CardFooter>
            </Card>
          </a>
          <a
            href="https://nordicscreen.com/da/forside/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Full-stack Developer Intern at NordicScreen - Want to learn
                  more? Click me
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  Full-stack Developer Intern
                </CardDescription>
              </CardHeader>
              <CardContent>
                During my computer science education, I completed a 10-week
                company internship at NordicScreen in Randers, where I gained
                valuable experience as a full-stack developer. I worked on
                various tasks and programming languages, including JavaScript,
                TypeScript, React, and PHP. Additionally, I participated in the
                development of an app designed for Samsung TV based on Tizen
                6.5.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="text-white whitespace-nowrap">PHP</Badge>
                  <Badge className="text-white whitespace-nowrap">React</Badge>
                  <Badge className="text-white whitespace-nowrap">
                    Typescript
                  </Badge>
                  <Badge className="text-white whitespace-nowrap">
                    Tizen 6.5
                  </Badge>
                </div>
                <div>
                  <span className="whitespace-nowrap">
                    August 2023 - October 2023
                  </span>
                </div>
              </CardFooter>
            </Card>
          </a>
          <a
            href="https://github.com/BubbleDK/DMA-Final-Exam"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  POC Consent Management Platform for JP/Politiken - Want to
                  learn more? Click me!
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  5th and final semester project Computer Science AP
                </CardDescription>
              </CardHeader>
              <CardContent>
                I, along with two fellow students, collaborated with
                JP/Politiken to develop a Proof of Concept for an internally
                owned Consent Management Platform. The system should be able to
                handle the scanning of cookies on a domain and store this
                information in a database. Additionally, it should have an admin
                dashboard to manage cookies on various domains and an
                informative popup for visiting users on JP's domains.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="text-white whitespace-nowrap">C#</Badge>
                  <Badge className="text-white whitespace-nowrap">SQL</Badge>
                  <Badge className="text-white whitespace-nowrap">React</Badge>
                  <Badge className="text-white whitespace-nowrap">
                    Typescript
                  </Badge>
                </div>
                <div>
                  <span>November 2023 - January 2024</span>
                </div>
              </CardFooter>
            </Card>
          </a>
          <a
            href="https://github.com/BubbleDK/xtellio-ucn-gruppe12"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  POC Dashboard Tool for Xtellio - Want to learn more? Click me
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  4th semester project Computer Science AP
                </CardDescription>
              </CardHeader>
              <CardContent>
                In the fourth semester of my computer science education, we
                collaborated with a local company to develop a dashboard for
                managing and visualizing data from a large pool of various IoT
                devices. We selected a range of key figures in collaboration
                with Xtellio, and these figures were then visualized in various
                graphs for better understanding of one's device pool. The
                front-end was developed in Vue.js, and using a JavaScript API,
                we could fetch data from Xtellio's backend and modify it before
                sending it to the front-end.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="text-white whitespace-nowrap">Vue.js</Badge>
                  <Badge className="text-white whitespace-nowrap">
                    Javascript
                  </Badge>
                </div>
                <div>
                  <span>February 2023 - June 2023</span>
                </div>
              </CardFooter>
            </Card>
          </a>
          <a
            href="https://github.com/BubbleDK/3_semesterprojekt"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Booking System for Internet Café - Want to learn more? Click
                  me
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  3rd semester Computer Science AP
                </CardDescription>
              </CardHeader>
              <CardContent>
                In the third semester of my computer science education, I
                collaborated with my exam group to develop a booking system for
                an internet café. The system could handle booking of seats based
                on a calendar and time slots. Additionally, customers could add
                orders for soda, snacks, etc. The system consisted of a backend
                made in C# and .NET with an SQL database, and a front-end made
                in WinForms.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="text-white whitespace-nowrap">C#</Badge>
                  <Badge className="text-white whitespace-nowrap">.NET</Badge>
                  <Badge className="text-white whitespace-nowrap">SQL</Badge>
                  <Badge className="text-white whitespace-nowrap">
                    WinForms
                  </Badge>
                </div>
                <div>
                  <span>September 2022 - January 2023</span>
                </div>
              </CardFooter>
            </Card>
          </a>
          <a
            href="https://github.com/BubbleDK/2-semesterProjekt"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Gift Solution System for Kop & Kande - Want to learn more?
                  Click me
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  2nd semester Computer Science AP
                </CardDescription>
              </CardHeader>
              <CardContent>
                In the second semester of my computer science education, I
                collaborated with my exam group to develop a demo version of a
                system for a local Kop & Kande store. The system could manage
                inventory and serve as a gift solution for Kop & Kande's
                customers. Backend developed in Java with a relational SQL
                database, front-end developed in WindowBuilder in Eclipse.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="text-white whitespace-nowrap">Java</Badge>
                  <Badge className="text-white whitespace-nowrap">SQL</Badge>
                  <Badge className="text-white whitespace-nowrap">
                    WindowBuilder
                  </Badge>
                </div>
                <div>
                  <span>February 2022 - June 2022</span>
                </div>
              </CardFooter>
            </Card>
          </a>
          {/* Repeat the Card component for other cards */}
        </div>
      </div>
    </div>
  );
}

export default Work;
