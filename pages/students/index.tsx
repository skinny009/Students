import Head from 'next/head'
import styles from '../../styles/students.module.css'
import Link from 'next/link'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return{
        props: {students : data}
    }
}

interface Student {
    id: number;
    name: string;
}
  
  interface StudentProps {
    students: Student[];
}

const Students = ({ students }: StudentProps) => {
    return ( 
        <>
            <Head>
                <title>List of Students</title>
            </Head>
            <div>
                <h1>Students </h1>
                {students.map(student => (
                    <Link legacyBehavior href={'/students/' + student.id} key={student.id}>
                        <a className={styles.single}>
                            <h3>{ student.name }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
        
    );
}

export default Students;