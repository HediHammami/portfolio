// components/ProjectCard.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 h-full transition-all duration-300 hover:scale-105">
      <CardContent className="p-4 flex flex-col h-full">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={675}
          className="w-full aspect-video object-cover rounded-lg mb-3"
        />

        <h3 className="font-semibold">{project.title}</h3>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {project.stack.join(" • ")}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
          {project.summary}
        </p>

        <div className="mt-auto pt-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                className="w-full hover:cursor-pointer"
              >
                View details
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <p>{project.details}</p>
                {(project.links?.live || project.links?.repo) && (
                  <div className="flex gap-3 pt-2">
                    {project.links.live && (
                      <a
                        className="underline"
                        href={project.links.live}
                        target="_blank"
                      >
                        Live
                      </a>
                    )}
                    {project.links.repo && (
                      <a
                        className="underline"
                        href={project.links.repo}
                        target="_blank"
                      >
                        Repo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
