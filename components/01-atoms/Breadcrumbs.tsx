import { LinkType } from '@/types/LinkType';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface BreadcrumbsProps {
  links: LinkType[];
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <ol className="flex items-center gap-3 bg-alpha-light-100 p-6 text-alpha-dark-500">
      {props.links.map((link, i) => {
        return (
          <React.Fragment key={link.title}>
            <li>{link.url ? <Link className='hover:underline' href={link.url}>{link.title}</Link> : link.title}</li>
            {i !== props.links.length - 1 && <ChevronRight className="h-3 w-3" />}
          </React.Fragment>
        );
      })}
    </ol>
  );
}
