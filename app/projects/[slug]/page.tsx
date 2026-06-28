import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { OutlineButton } from "@/components/ui/OutlineButton";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  
  return {
    title: `${project.title} | Basirat Basanya`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#131313] px-6 pt-32 pb-20 text-white md:px-12 lg:px-24">
      {/* Back button */}
      <div className="mb-12">
        <Link
          href="/#projects"
          className="inline-block font-ticketing text-sm text-white/60 transition-colors hover:text-white"
        >
          &lt;- back to projects
        </Link>
      </div>

      <div className="mx-auto mt-12 max-w-5xl">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start lg:gap-8">
          {/* Left Column (Title, Subtitle, Github) */}
          <div className="flex max-w-2xl flex-col">
            <h1 className="font-extended text-4xl uppercase leading-[1.1] tracking-wider sm:text-5xl md:text-[56px]">
              {project.title}
            </h1>
            <p className="mt-6 font-ticketing text-lg leading-relaxed text-white md:text-[22px]">
              {project.description}
            </p>
            {"githubUrl" in project && project.githubUrl ? (
              <div className="mt-8">
                <OutlineButton
                  href={project.githubUrl as string}
                  external
                  className="font-ticketing !lowercase tracking-[0.1em] border-white/30 text-[#FF2D2D]"
                >
                  github link
                </OutlineButton>
              </div>
            ) : null}
          </div>

          {/* Right Column (Technologies) */}
          <div className="flex flex-col items-start lg:items-end lg:pt-2">
            <h2 className="font-ticketing text-sm uppercase tracking-widest text-white md:text-[15px]">
              Technologies Used
            </h2>
            <div className="mt-4 flex flex-wrap gap-3 lg:justify-end">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="rounded-full bg-[#cc5050] px-8 py-2.5 font-ticketing text-sm lowercase tracking-wider text-white md:text-[15px]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshot / Video / Image */}
        <div className="relative mt-16 aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-[#d9d9d9] shadow-xl md:aspect-video md:mt-20 lg:mt-24">
          {"videoUrl" in project && project.videoUrl ? (
            <video
              src={project.videoUrl as string}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-top"
            />
          ) : "imageUrl" in project && project.imageUrl ? (
            <Image
              src={project.imageUrl as string}
              alt={`${project.title} screenshot`}
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-top"
            />
          ) : null}
        </div>

        {/* Long Description */}
        <div className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
          <p className="font-ticketing text-base leading-[1.8] text-white md:text-[17px]">
            {project.longDescription}
          </p>
        </div>
      </div>
    </main>
  );
}
