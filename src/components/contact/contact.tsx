"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function CardsReportIssue() {
  const id = React.useId()

  return (
    <Card className="max-w-[800px]  ">
      <CardHeader className="justify-center">
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>
          What area are you having problems with?
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor={`area-${id}`}>Your Name</Label>
            <Input id={`area-${id}`} placeholder="Name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`security-level-${id}`}>Your Email</Label>
            <Input
              id={`security-level-${id}`}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor={`area-${id}`}>Your Number</Label>
            <Input id={`area-${id}`} placeholder="Number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`security-level-${id}`}>Security Level</Label>
            <Input
              id={`security-level-${id}`}
              placeholder="Enter the security level"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`description-${id}`}>Message</Label>
          <Textarea
            id={`description-${id}`}
            placeholder="Message"
          />
        </div>
      </CardContent>
      <CardFooter className="justify-center space-x-2">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
