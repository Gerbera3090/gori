import type { Metadata } from "next";
import Image from "next/image";
import "./credits.css";

export const metadata: Metadata = { title: "만든 사람들 | 고리" };

const members = [
  { name: "권혁원", nickname: "gb", role: "PM" },
  { name: "한지민", nickname: "minivet", role: "Designer" },
  { name: "서인성", nickname: "cheese", role: "Designer" },
  { name: "박정원", nickname: "siwon", role: "Developer" },
];

export default function CreditsPage() {
  return (
    <main className="page-shell credits-page">
      <h1>만든 사람들</h1>
      <ul className="credits-grid">
        {members.map(({ name, nickname, role }) => (
          <li key={nickname} className="card credits-card">
            <div className="credits-member">
              <h2>{name}</h2>
              <p className="credits-nickname">
                <Image
                  src="/design/credits-symbol.svg"
                  width={6}
                  height={14}
                  alt=""
                  unoptimized
                />
                {nickname}
              </p>
            </div>
            <span className="credits-role" data-role={role} lang="en">
              {role}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
