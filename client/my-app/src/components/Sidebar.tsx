import {useState} from 'react';
import {Tab , Nav} from 'react-bootstrap'
export default function Sidebar ({id}:any) {

    const [activeKey,setActiveKey] = useState<string>('converstions')

    function handleActiveKey (eventKey: any){
        setActiveKey(eventKey);
    }

    return (
<div style={{width: '250px'}} className="d-flex flex-column">
  <Tab.Container activeKey={activeKey} onSelect={handleActiveKey}>
    <Nav variant='tabs' className='justify-content-center'>
        <Nav.Item>
        <Nav.Link eventKey={'converstions'}>CONVERSTIONS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey={'contacts'}>CONTACTS</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content> 
    <Tab.Pane eventKey={'converstions'}>
<Converstions/>
    </Tab.Pane>
    </Tab.Content>
  </Tab.Container>
</div>
    )
}