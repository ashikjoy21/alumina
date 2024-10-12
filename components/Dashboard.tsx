'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { User, Briefcase, Users, Calendar, Heart, MessageSquare, Bell, LogOut, Search } from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="bg-white w-64 min-h-screen flex flex-col">
        <div className="p-4 flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">Class of 2020</p>
          </div>
        </div>
        <nav className="flex-1">
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("overview")}>
            <User className="mr-2 h-4 w-4" />
            Overview
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("mentorship")}>
            <Users className="mr-2 h-4 w-4" />
            Mentorship
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("jobs")}>
            <Briefcase className="mr-2 h-4 w-4" />
            Job Board
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("messages")}>
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("events")}>
            <Calendar className="mr-2 h-4 w-4" />
            Events
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("donations")}>
            <Heart className="mr-2 h-4 w-4" />
            Donations
          </Button>
        </nav>
        <div className="p-4">
          <Button variant="outline" className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input type="text" placeholder="Search..." className="pl-10" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button variant="outline">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="jobs">Job Board</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">80%</div>
                  <p className="text-sm text-gray-500">Complete your profile to unlock more opportunities</p>
                  <Button className="mt-4">Update Profile</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Network Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <span>Connections</span>
                    <span className="font-bold">152</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Profile Views</span>
                    <span className="font-bold">38</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Messages</span>
                    <span className="font-bold">12</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>You received a new message</li>
                    <li>Your job application was viewed</li>
                    <li>New event in your area</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mentorship">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Find a Mentor</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input type="text" placeholder="Search mentors by skill or industry" className="mb-4" />
                  <ScrollArea className="h-[300px]">
                    {[1, 2, 3, 4, 5].map((mentor) => (
                      <div key={mentor} className="flex items-center space-x-4 mb-4">
                        <Avatar>
                          <AvatarFallback>M{mentor}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">Mentor Name</h3>
                          <p className="text-sm text-gray-500">Industry Expert</p>
                        </div>
                        <Button variant="outline" size="sm">Connect</Button>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Your Mentorship Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    {[1, 2, 3].map((session) => (
                      <div key={session} className="mb-4">
                        <h3 className="font-semibold">Session with Mentor Name</h3>
                        <p className="text-sm text-gray-500">Date: MM/DD/YYYY</p>
                        <p className="text-sm text-gray-500">Time: HH:MM AM/PM</p>
                        <Button variant="outline" size="sm" className="mt-2">Join Meeting</Button>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Job Opportunities</CardTitle>
                <CardDescription>Exclusive job postings from our alumni network</CardDescription>
              </CardHeader>
              <CardContent>
                <Input type="text" placeholder="Search jobs..." className="mb-4" />
                <ScrollArea className="h-[400px]">
                  {[1, 2, 3, 4, 5].map((job) => (
                    <div key={job} className="mb-6 pb-4 border-b last:border-b-0">
                      <h3 className="font-semibold text-lg">Software Engineer</h3>
                      <p className="text-sm text-gray-500 mb-2">TechCorp Inc. • San Francisco, CA</p>
                      <p className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <div className="flex space-x-2 mb-2">
                        <Badge>Full-time</Badge>
                        <Badge variant="outline">Remote</Badge>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input type="text" placeholder="Search messages..." className="mb-4" />
                  <ScrollArea className="h-[400px]">
                    {[1, 2, 3, 4, 5].map((conversation) => (
                      <div key={conversation} className="flex items-center space-x-4 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded">
                        <Avatar>
                          <AvatarFallback>U{conversation}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">User Name</h3>
                          <p className="text-sm text-gray-500">Last message preview...</p>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] mb-4">
                    {[1, 2, 3, 4, 5].map((message) => (
                      <div key={message} className={`mb-4 ${message % 2 === 0 ? 'text-right' : ''}`}>
                        <div className={`inline-block p-2 rounded-lg ${message % 2 === 0 ? 'bg-blue-100' : 'bg-gray-100'}`}>
                          <p>This is a sample message.</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">HH:MM AM/PM</p>
                      </div>
                    ))}
                  </ScrollArea>
                  <div className="flex space-x-2">
                    <Input type="text" placeholder="Type a message..." className="flex-1" />
                    <Button>Send</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Networking opportunities and exclusive alumni events</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  {[1, 2, 3, 4, 5].map((event) => (
                    <div key={event} className="mb-6 pb-4 border-b last:border-b-0">
                      <h3 className="font-semibold text-lg">Tech Networking Mixer</h3>
                      <p className="text-sm text-gray-500 mb-2">Date: MM/DD/YYYY • Time: HH:MM AM/PM</p>
                      <p className="text-sm text-gray-500 mb-2">Location: Virtual / San Francisco, CA</p>
                      <p className="text-sm mb-2">Join us for an evening of networking with fellow alumni in the tech industry. Great opportunity to make new connections and learn about the latest trends.</p>
                      <div className="flex space-x-2 mb-2">
                        <Badge>Networking</Badge>
                        <Badge variant="outline">Tech</Badge>
                      </div>
                      <Button>RSVP</Button>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donations">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Make a Donation</CardTitle>
                  <CardDescription>Support student projects and initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                      <Input type="number" placeholder="Enter amount" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fund</label>
                      <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                        <option>Scholarship Fund</option>
                        <option>Research Fund</option>
                        <option>General Fund</option>
                      </select>
                    </div>
                    <Button className="w-full">Donate Now</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Donation History</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    {[1, 2, 3, 4, 5].map((donation) => 
                      <div key={donation} className="mb-4 pb-4 border-b last:border-b-0">
                        <div className="flex justify-between">
                          <span className="font-semibold">$100</span>
                          <span className="text-sm  text-gray-500">MM/DD/YYYY</span>
                        </div>
                        <p className="text-sm text-gray-700">Scholarship Fund</p>
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}