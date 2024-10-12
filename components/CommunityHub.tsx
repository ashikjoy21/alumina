import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react'

type Post = {
  id: number;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
}

type Channel = {
  id: number;
  name: string;
  description: string;
}

const CommunityHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'channels'>('feed')
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Alice Johnson',
      avatar: 'https://github.com/shadcn.png',
      content: 'Just finished my internship at Google! It was an amazing experience. Ask me anything!',
      likes: 24,
      comments: 5,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      author: 'Bob Smith',
      avatar: 'https://github.com/shadcn.png',
      content: 'Looking for study partners for the upcoming machine learning course. Anyone interested?',
      likes: 15,
      comments: 8,
      timestamp: '4 hours ago'
    },
    // Add more sample posts here
  ])

  const [channels, setChannels] = useState<Channel[]>([
    { id: 1, name: 'Career Advice', description: 'Get tips and advice for your career journey' },
    { id: 2, name: 'Tech Talk', description: 'Discuss the latest in technology and programming' },
    { id: 3, name: 'Alumni Networking', description: 'Connect with fellow alumni from your university' },
    // Add more sample channels here
  ])

  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = (e.target as HTMLFormElement).postContent.value
    if (content.trim()) {
      const newPost: Post = {
        id: posts.length + 1,
        author: 'Current User',
        avatar: 'https://github.com/shadcn.png',
        content: content,
        likes: 0,
        comments: 0,
        timestamp: 'Just now'
      }
      setPosts([newPost, ...posts])
      ;(e.target as HTMLFormElement).reset()
    }
  }

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'feed' | 'channels')}>
        <TabsList>
          <TabsTrigger value="feed">Community Feed</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
        </TabsList>
        
        <TabsContent value="feed">
          <Card>
            <CardHeader>
              <CardTitle>Community Feed</CardTitle>
              <CardDescription>Share and discuss with your peers</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePostSubmit} className="mb-4">
                <Input name="postContent" placeholder="What's on your mind?" className="mb-2" />
                <Button type="submit">Post</Button>
              </form>
              <ScrollArea className="h-[600px]">
                {posts.map((post) => (
                  <Card key={post.id} className="mb-4">
                    <CardHeader>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={post.avatar} />
                          <AvatarFallback>{post.author[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-sm">{post.author}</CardTitle>
                          <CardDescription>{post.timestamp}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{post.content}</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="mr-2 h-4 w-4" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="channels">
          <Card>
            <CardHeader>
              <CardTitle>Channels</CardTitle>
              <CardDescription>Join discussions on various topics</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                {channels.map((channel) => (
                  <Card key={channel.id} className="mb-4">
                    <CardHeader>
                      <CardTitle>{channel.name}</CardTitle>
                      <CardDescription>{channel.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button>Join Channel</Button>
                    </CardContent>
                  </Card>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CommunityHub