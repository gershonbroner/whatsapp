import { useRef} from 'react'
import { Container, Form,Button } from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'
interface prop{
    onIdSubmit:any
}
export default function Login ({onIdSubmit}:prop) {
    const idRef=useRef<HTMLInputElement | null >(null);

    function handleSubmit(e:React.SyntheticEvent){
        e.preventDefault()
        onIdSubmit(idRef.current?.value)
    }
    function createNewId(){
onIdSubmit(uuidV4())
    }
    return (
        <> 
        <Container className='align-items-center d-flex' style={{height:'100vh'}}>
       <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
            <Form.Label>ENTER YOUR  ID</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type ="submit" className="mr-2">login</Button>
        <Button variant='secondary' onClick={createNewId}>create A new Id</Button>
       </Form>
        </Container>
        </>
    )
}