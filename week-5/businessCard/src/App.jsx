function App(props){
  return (
    <>
    <Component name={props.name} description={props.description} intrests={props.interest}></Component>
    <Socials name="linkedIn" link={props.linkedin} target="_blank"></Socials>
    <br />
    <Socials name="twitter" link={props.twitter} target="_blank"></Socials>
    </>
  )
}

function Component({name, description, intrests}){
  return(
    <>
    <h1>{name}</h1>
    <p>{description}</p>
    <h2>Interests</h2>
    <p>{intrests}</p>
    </>
  )
}
function Socials({name,link,target}){
  return(
    <a href={link} target={target}>{name}</a>
  )
}
export default App;