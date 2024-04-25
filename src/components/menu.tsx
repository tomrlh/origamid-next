"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

const Menu = () => {
  const params = useParams();
  const pathname = usePathname();
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/acoes-server">Ações (Server Side)</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/imc">IMC</Link>
      </li>
      <li>
        <Link href="/cursos">Cursos</Link>
      </li>
      <li>
        <Link href="/server-fetch">Server Fetch</Link>
      </li>
      <li>
        <Link href="/client-fetch">Client Fetch</Link>
      </li>
    </ul>
  );
};

export default Menu;
