import Card from './Card';

export default function Cards(props) {
  const {characters} = props;
  const {onClose} = props;
   return (
   <div>
      {characters.map((character) =>( 
      <Card character= {character} 
      key={character.id}
      onClose={onClose}/>
      ))}
   </div>
   );
}
