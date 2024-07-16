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
            <CardFooter className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1">
                <Badge className="text-white">C#</Badge>
                <Badge className="text-white">Unity</Badge>
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
          <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Black Capital Technology
              </CardTitle>
              <CardDescription className="text-sm mt-2">
                Backend Developer Intern
              </CardDescription>
            </CardHeader>
            <CardContent>
              As part of my search for a job, I went into an internship with
              Black Capital Technology as a backend developer on some internal
              projects. I gained experience as a backend developer using the Go
              programming language. I was also introduced to working in a small
              team combined of remote and on-site workers.
            </CardContent>
            <CardFooter className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1">
                <Badge className="text-white">Go</Badge>
                <Badge className="text-white">Stripe</Badge>
              </div>
              <div>
                <span>Through July 2024</span>
              </div>
            </CardFooter>
          </Card>
          <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Full-stack Developer Intern at NordicScreen
              </CardTitle>
              <CardDescription className="text-sm mt-2">
                Full-stack Developer Intern
              </CardDescription>
            </CardHeader>
            <CardContent>
              During my computer science education, I completed a 10-week
              company internship at NordicScreen in Randers, where I gained
              valuable experience as a full-stack developer. I worked on various
              tasks and programming languages, including JavaScript, TypeScript,
              React, and PHP. Additionally, I participated in the development of
              an app designed for Samsung TV based on Tizen 6.5.
            </CardContent>
            <CardFooter className="flex items-center justify-between mt-4">
              <Badge className="text-white">PHP</Badge>
              <Badge className="text-white">React</Badge>
              <Badge className="text-white">Typescript</Badge>
              <Badge className="text-white">Tizen 6.5</Badge>
              <span>August 2023 - October 2023 (10 weeks)</span>
            </CardFooter>
          </Card>
          <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                POC Consent Management Platform for JP/Politiken
              </CardTitle>
              <CardDescription className="text-sm mt-2">
                5th and final semester project Computer Science AP
              </CardDescription>
            </CardHeader>
            <CardContent>
              I, along with two fellow students, collaborated with JP/Politiken
              to develop a Proof of Concept for an internally owned Consent
              Management Platform. The system should be able to handle the
              scanning of cookies on a domain and store this information in a
              database. Additionally, it should have an admin dashboard to
              manage cookies on various domains and an informative popup for
              visiting users on JP's domains.
            </CardContent>
            <CardFooter className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1">
                <Badge className="text-white">C#</Badge>
                <Badge className="text-white">SQL</Badge>
                <Badge className="text-white">React</Badge>
                <Badge className="text-white">Typescript</Badge>
              </div>
              <div>
                <span>November 2023 - January 2024</span>
              </div>
            </CardFooter>
          </Card>
          <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                POC Dashboard Tool for Xtellio
              </CardTitle>
              <CardDescription className="text-sm mt-2">
                4th semester project Computer Science AP
              </CardDescription>
            </CardHeader>
            <CardContent>
              In the fourth semester of my computer science education, we
              collaborated with a local company to develop a dashboard for
              managing and visualizing data from a large pool of various IoT
              devices. We selected a range of key figures in collaboration with
              Xtellio, and these figures were then visualized in various graphs
              for better understanding of one's device pool. The front-end was
              developed in Vue.js, and using a JavaScript API, we could fetch
              data from Xtellio's backend and modify it before sending it to the
              front-end.
            </CardContent>
            <CardFooter className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1">
                <Badge className="text-white">Vue.js</Badge>
                <Badge className="text-white">Javascript</Badge>
              </div>
              <div>
                <span>February 2023 - June 2023</span>
              </div>
            </CardFooter>
          </Card>
          <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Booking System for Internet Café
              </CardTitle>
              <CardDescription className="text-sm mt-2">
                3rd semester Computer Science AP
              </CardDescription>
            </CardHeader>
            <CardContent>
              In the third semester of my computer science education, I
              collaborated with my exam group to develop a booking system for an
              internet café. The system could handle booking of seats based on a
              calendar and time slots. Additionally, customers could add orders
              for soda, snacks, etc. The system consisted of a backend made in
              C# and .NET with an SQL database, and a front-end made in
              WinForms.
            </CardContent>
            <CardFooter className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1">
                <Badge className="text-white">C#</Badge>
                <Badge className="text-white">.NET</Badge>
                <Badge className="text-white">SQL</Badge>
                <Badge className="text-white">WinForms</Badge>
              </div>
              <div>
                <span>September 2022 - January 2023</span>
              </div>
            </CardFooter>
          </Card>
          <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Gift Solution System for Kop & Kande
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
            <CardFooter className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-1">
                <Badge className="text-white">Java</Badge>
                <Badge className="text-white">SQL</Badge>
                <Badge className="text-white">WindowBuilder</Badge>
              </div>
              <div>
                <span>February 2022 - June 2022</span>
              </div>
            </CardFooter>
          </Card>
          {/* Repeat the Card component for other cards */}
        </div>
      </div>
    </div>
  );
}

export default Work;
