import { Link } from 'react-router-dom';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About me', href: '/about' },
  { label: 'Thoughts & Stories', href: '/stories' },
  { label: 'Poetry', href: '/poetry' },
  { label: 'Recommendations', href: '/recommendations' },
  { label: 'Contact', href: '/contact' },
];

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  return (
    <ul className={`${className}`}>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            to={item.href}
            className="block py-4 px-2 hover:bg-tres transition-colors duration-200"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}