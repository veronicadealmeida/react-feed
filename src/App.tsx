import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}
interface Post {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/veronicadealmeida.png',
      name: 'VerΓ΄nica de Almeida',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π',
      },
      { type: 'link', content: 'π jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-08 09:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π' },
      {
        type: 'paragraph',
        content:
          '!!! Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π',
      },
      { type: 'link', content: 'π jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-09 17:35:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div>
            {posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
