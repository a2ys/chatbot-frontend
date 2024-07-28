import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function MainComponent() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center">
        <Avatar className="mr-4">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-medium">Chatbot</h2>
      </header>
      <div className="flex-1 overflow-auto p-6 space-y-4">
        <div className="flex items-start">
          <Avatar className="mr-4">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-4 max-w-[70%]">
            <p>Hi there! I have a question about airplane turbulence.</p>
          </div>
        </div>
        <div className="flex items-start justify-end">
          <div className="bg-primary text-primary-foreground rounded-lg p-4 max-w-[70%]">
            <p>
              Of course! Airplane turbulence happens when the plane encounters pockets of air that are moving
              differently. It's like sailing a boat on choppy water.
            </p>
          </div>
          <Avatar className="ml-4">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start">
          <Avatar className="mr-4">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-4 max-w-[70%]">
            <p>That makes sense, thank you! Is it dangerous at all?</p>
          </div>
        </div>
        <div className="flex items-start justify-end">
          <div className="bg-primary text-primary-foreground rounded-lg p-4 max-w-[70%]">
            <p>
              No, turbulence is usually not dangerous at all. It's just a normal part of flying and can make the ride
              feel a bit bumpy, but it's completely safe.
            </p>
          </div>
          <Avatar className="ml-4">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="bg-muted p-4 flex items-center">
        <Textarea placeholder="Type your message..." className="flex-1 mr-4 rounded-lg border border-neutral-400 p-2" />
        <Button>
          <ArrowUpIcon className="w-4 h-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  )
}

function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}