
const Title = ({subtitle,title,parrafo,descriptionRef,titleRef}) => {


  return (
    <>
      <h2 >{subtitle}</h2>
      <h1 ref={titleRef}>{title}</h1>
      <p ref={descriptionRef}>
        {parrafo}
      </p>
    </>
  );
};

export default Title;