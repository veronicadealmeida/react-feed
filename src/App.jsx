import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div>
            <Post
              author=""
              content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla aliquam corporis eius iure error sequi. Mollitia consectetur, nostrum nisi sit modi voluptatum ullam accusantium tempora corrupti iusto quod odit dolor."
            ></Post>
            <Post
              author=""
              content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla aliquam corporis eius iure error sequi. Mollitia consectetur, nostrum nisi sit modi voluptatum ullam accusantium tempora corrupti iusto quod odit dolor."
            ></Post>
          </div>
        </main>
      </div>
    </div>
  );
}
