import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Trash2 } from 'lucide-react';

interface Technology {
  name: string;
  icon?: string;
}

interface Achievement {
  description: string;
}

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: Technology[];
  achievements: Achievement[];
  githubLink?: string;
  liveLink?: string;
  startDate: string;
  endDate?: string;
}

export default function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>({
    title: '',
    description: '',
    images: [],
    technologies: [],
    achievements: [],
    startDate: '',
  });
  const [newTechnology, setNewTechnology] = useState<string>('');
  const [newAchievement, setNewAchievement] = useState<string>('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, you would upload these to a storage service
      // For now, we'll just store the file names
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setNewProject(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const addTechnology = () => {
    if (newTechnology.trim()) {
      setNewProject(prev => ({
        ...prev,
        technologies: [...prev.technologies, { name: newTechnology.trim() }]
      }));
      setNewTechnology('');
    }
  };

  const addAchievement = () => {
    if (newAchievement.trim()) {
      setNewProject(prev => ({
        ...prev,
        achievements: [...prev.achievements, { description: newAchievement.trim() }]
      }));
      setNewAchievement('');
    }
  };

  const removeImage = (index: number) => {
    setNewProject(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const removeTechnology = (index: number) => {
    setNewProject(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index)
    }));
  };

  const removeAchievement = (index: number) => {
    setNewProject(prev => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setProjects(prev => [...prev, newProject]);
    // Reset form
    setNewProject({
      title: '',
      description: '',
      images: [],
      technologies: [],
      achievements: [],
      startDate: '',
    });
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Project Manager</CardTitle>
          <CardDescription>Add and manage your projects</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="add" className="w-full">
            <TabsList>
              <TabsTrigger value="add">Add Project</TabsTrigger>
              <TabsTrigger value="view">View Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="add">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Project Title</Label>
                  <Input
                    id="title"
                    value={newProject.title}
                    onChange={e => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newProject.description}
                    onChange={e => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="images">Images</Label>
                  <Input
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                  />
                  <div className="grid grid-cols-4 gap-4 mt-2">
                    {newProject.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img src={image} alt="" className="w-full h-24 object-cover rounded" />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-1 right-1"
                          onClick={() => removeImage(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Technologies</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newTechnology}
                      onChange={e => setNewTechnology(e.target.value)}
                      placeholder="Add technology..."
                    />
                    <Button type="button" onClick={addTechnology}>
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {newProject.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-secondary p-2 rounded"
                      >
                        {tech.name}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeTechnology(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Achievements</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newAchievement}
                      onChange={e => setNewAchievement(e.target.value)}
                      placeholder="Add achievement..."
                    />
                    <Button type="button" onClick={addAchievement}>
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                  <div className="space-y-2 mt-2">
                    {newProject.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-secondary p-2 rounded"
                      >
                        {achievement.description}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeAchievement(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="githubLink">GitHub Link (Optional)</Label>
                    <Input
                      id="githubLink"
                      value={newProject.githubLink || ''}
                      onChange={e => setNewProject(prev => ({ ...prev, githubLink: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="liveLink">Live Link (Optional)</Label>
                    <Input
                      id="liveLink"
                      value={newProject.liveLink || ''}
                      onChange={e => setNewProject(prev => ({ ...prev, liveLink: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={newProject.startDate}
                      onChange={e => setNewProject(prev => ({ ...prev, startDate: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date (Optional)</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={newProject.endDate || ''}
                      onChange={e => setNewProject(prev => ({ ...prev, endDate: e.target.value }))}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full">Add Project</Button>
              </form>
            </TabsContent>

            <TabsContent value="view">
              <ScrollArea className="h-[600px]">
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Images</h4>
                            <div className="grid grid-cols-4 gap-4">
                              {project.images.map((image, i) => (
                                <img
                                  key={i}
                                  src={image}
                                  alt=""
                                  className="w-full h-24 object-cover rounded"
                                />
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="bg-secondary px-3 py-1 rounded"
                                >
                                  {tech.name}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Achievements</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {project.achievements.map((achievement, i) => (
                                <li key={i}>{achievement.description}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                GitHub Repository
                              </a>
                            )}
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Live Demo
                              </a>
                            )}
                          </div>

                          <div className="text-sm text-muted-foreground">
                            {project.startDate} - {project.endDate || 'Present'}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
