import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shannon Clark | Home</title>
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m <Link href="/contact">Shannon</Link>.
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima vero saepe numquam repellendus provident dolore error, id aspernatur facilis rerum accusantium odio itaque consequatur natus, ducimus earum fugit aut. Temporibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro repellat aut accusantium sunt laboriosam adipisci delectus voluptatem asperiores, ab officia iure doloribus nesciunt tenetur ut cum qui, quia sint.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel similique, quas quibusdam suscipit facilis blanditiis iure minus recusandae deleniti facere quaerat dicta iste corrupti! Dignissimos voluptatem aspernatur possimus iusto?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus fugit minima pariatur, necessitatibus velit sit veniam! Consequuntur odit nisi rerum ad quo rem itaque excepturi incidunt amet ea, dolorem nostrum.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium non in expedita autem quia. Cumque a exercitationem temporibus, tempora modi consectetur, soluta labore eaque dolores, impedit quibusdam corporis ducimus mollitia.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque accusamus rem nesciunt similique sapiente deleniti excepturi, quos cumque, quae neque a quis facere error provident, exercitationem earum cum ab officiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio odio vitae impedit dolores, iure, placeat cupiditate quas voluptatibus at dolorum ratione facere ipsum hic dignissimos minima harum reprehenderit exercitationem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium labore id, ex praesentium enim animi minus nihil quibusdam repudiandae doloremque, quaerat perferendis quae sequi, ipsam molestiae aliquam iusto a eaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nam nulla at minima sunt earum molestiae recusandae sequi temporibus. Accusamus magnam minus maxime quae dolores illo temporibus consequatur, incidunt odit?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam numquam sapiente ipsa possimus commodi blanditiis ratione saepe, voluptatem atque aliquam ea assumenda. Fugiat odio architecto ut, hic libero cum neque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corporis iste vero quisquam accusantium explicabo iure! Assumenda temporibus quod placeat veniam cum recusandae similique blanditiis. Reprehenderit exercitationem adipisci fugit pariatur.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci tenetur voluptatem ratione eveniet, dignissimos facere iure voluptas veniam fugit necessitatibus laudantium soluta, minus nisi a, sed veritatis deleniti quia.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quisquam quas, amet facere repellat ipsum, doloribus pariatur magni est magnam animi unde quo perferendis assumenda temporibus modi officiis. Necessitatibus, sint!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis pariatur soluta nisi quas, voluptas, eaque doloribus earum molestiae, similique dolorem repudiandae maiores sit voluptatibus aut vel magni quidem. Dolor, voluptas?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, quisquam dolorum molestiae tempore aperiam amet ratione ut exercitationem consequuntur dignissimos porro repudiandae ad in earum sequi assumenda officiis impedit quos!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, in, saepe doloremque error autem numquam molestias fuga ad, sapiente atque tempore consequatur? Ex recusandae rerum eveniet voluptate enim nesciunt accusamus.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis et veniam natus libero quae accusamus impedit aliquid provident molestias perferendis illum error autem, officia quam doloribus ratione rerum amet quis?
          
          </p>
        </div>
      </main>
    </div>
  )
}
