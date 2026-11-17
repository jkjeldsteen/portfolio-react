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
    <main className="projects-wrapper">
      <div className="main-content">
        <h1>Software Projects &amp; Professional Work</h1>
        <div className="projects-container">
          <a
            href="https://www.marel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  JBT Marel
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  Software Developer · Støvring
                </CardDescription>
              </CardHeader>
              <CardContent>
                I develop an internal ordering system to streamline workflows in the development department. I also helped build and support a Unity-based digital twin for a new machine, integrating the simulation with a Beckhoff PLC. My work includes concept development, software architecture, and coordination with stakeholders.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="whitespace-nowrap">C#</Badge>
                  <Badge className="whitespace-nowrap">Unity</Badge>
                  <Badge className="whitespace-nowrap">Beckhoff PLC</Badge>
                  <Badge className="whitespace-nowrap">.NET</Badge>
                </div>
                <div>
                  <span className="whitespace-nowrap">
                    2025–present
                  </span>
                </div>
              </CardFooter>
            </Card>
          </a>
          <Card className="card bg-transparent text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Game development
              </CardTitle>
              <CardDescription className="text-sm mt-2">
                Personal projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              I build 2D and 3D games with Unity and C#. In Epoch Raiders, a top-down roguelike shooter, I work on enemy AI, procedural level design, and pixel art animation.
            </CardContent>
            <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
              <div className="flex items-center space-x-1">
                <Badge className="whitespace-nowrap">C#</Badge>
                <Badge className="whitespace-nowrap">Unity</Badge>
              </div>
              <div className="flex-1 text-center">
                <a
                  href="https://jkjeldsteen.itch.io/epoch-raiders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant={"outline"}>Epoch Raiders</Button>
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
                  Black Capital Technology
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  Backend Developer · Aalborg
                </CardDescription>
              </CardHeader>
              <CardContent>
                I developed and maintained Go services for Heads, integrated Stripe payments, and built features for specialist and treatment recommendations and user notifications. I also helped troubleshoot and stabilize the backend.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="whitespace-nowrap">Go</Badge>
                  <Badge className="whitespace-nowrap">Stripe</Badge>
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
                  NordicScreen
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  Full-stack Developer · Randers
                </CardDescription>
              </CardHeader>
              <CardContent>
                I worked on production frontend and backend features using JavaScript, TypeScript, React, and PHP, and helped develop a Samsung TV app on Tizen 6.5.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="whitespace-nowrap">PHP</Badge>
                  <Badge className="whitespace-nowrap">React</Badge>
                  <Badge className="whitespace-nowrap">
                    TypeScript
                  </Badge>
                  <Badge className="whitespace-nowrap">
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
                  JP / Politiken Consent Management Platform
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  Full-stack development · Final AP degree project
                </CardDescription>
              </CardHeader>
              <CardContent>
                Two fellow students and I built a proof of concept for an internal consent management platform. It scanned domains for cookies, stored the results in SQL, and provided an admin dashboard and a cookie notice. The project helped JP / Politiken assess the value of building its own platform.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="whitespace-nowrap">C#</Badge>
                  <Badge className="whitespace-nowrap">SQL</Badge>
                  <Badge className="whitespace-nowrap">React</Badge>
                  <Badge className="whitespace-nowrap">
                    TypeScript
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
                  Xtellio IoT Dashboard
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  Full-stack development · AP degree project
                </CardDescription>
              </CardHeader>
              <CardContent>
                We worked with Xtellio to select device metrics and visualize them in a Vue.js dashboard. A JavaScript API fetched and transformed IoT data from Xtellio’s backend.
              </CardContent>
              <CardFooter className="flex flex-wrap items-center space-x-1 md:space-x-2 mb-2 md:mb-0 mt-auto">
                <div className="flex items-center space-x-1">
                  <Badge className="whitespace-nowrap">Vue.js</Badge>
                  <Badge className="whitespace-nowrap">
                    JavaScript
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
                  <Badge className="whitespace-nowrap">C#</Badge>
                  <Badge className="whitespace-nowrap">.NET</Badge>
                  <Badge className="whitespace-nowrap">SQL</Badge>
                  <Badge className="whitespace-nowrap">
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
                  <Badge className="whitespace-nowrap">Java</Badge>
                  <Badge className="whitespace-nowrap">SQL</Badge>
                  <Badge className="whitespace-nowrap">
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
    </main>
  );
}

export default Work;
