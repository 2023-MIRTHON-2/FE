interface props {
  title: string;
}

const Title = ({ title }: props) => {
  return (
    <section
      className={`flex w-full justify-center font-bold text-3xl pb-10 text-my-green basic-border-bottom`}
    >
      {title}
    </section>
  );
};

export default Title;
