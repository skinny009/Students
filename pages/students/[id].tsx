import { GetStaticPaths, GetStaticProps } from 'next';

interface Student {
  id: number;
  name: string;
  email: string;
  website: string;
  address: {
    city: string;
  };
}

interface DetailsProps {
  student: Student;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: Student[] = await res.json();

  const paths = data.map((student) => {
    return {
      params: { id: student.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DetailsProps> = async (context) => {
  const id = context?.params?.id; // Use optional chaining to handle undefined context
  if (!id) {
    throw new Error('Missing ID parameter');
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data: Student = await res.json();

  return {
    props: { student: data },
  };
};

const Details: React.FC<DetailsProps> = ({ student }) => {
  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.email}</p>
      <p>{student.website}</p>
      <p>{student.address.city}</p>
    </div>
  );
};

export default Details;
