
const Delete = ({ id }) => {

    const handleClick = async () => {
        try {
            console.log("hello")
          const res = await fetch(`/api/item\?id\=${id}`, {
            method: 'DELETE',
          });
          console.log(res)
        } catch (error) {
          console.error(error);
        }
      } 


    return (
        <div>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default Delete