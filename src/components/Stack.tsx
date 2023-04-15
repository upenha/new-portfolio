import Image from 'next/image'

interface StackProps {
  name: string;
  url: string;
  image: string;
}

export const Stack = ({ name, url, image}: StackProps) => (
  <a href={url} className="flex flex-col items-center justify-center gap-2 p-4 text-lg rounded-lg bg-zinc-800" target="_blank">
    <div className="items-center justify-center aspect-square">
      <Image className="" src={image} width={100} height={100} alt={name} />
    </div>
    {name}
  </a>
)