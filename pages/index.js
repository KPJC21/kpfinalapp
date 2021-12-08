import React from 'react'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from 'next-firebase-auth'
import {
  Container,
  Flex,
  Heading,
  Link,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text,
  IconButton,
  Divider,
  List,
  ListItem,
  Stack
} from "@chakra-ui/react"
import firebase from 'firebase/app'
import 'firebase/firestore'
import NewHeader from '../components/NewHeader'
import DemoPageLinks from '../components/DemoPageLinks'
import { TimeIcon, PhoneIcon, CalendarIcon, StarIcon, CloseIcon, LockIcon, UnlockIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    }
  }
}
const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

const Home = ({allData}) => {
  const AuthUser = useAuthUser()
  return (
    <div className="background" >
      <NewHeader email={AuthUser.email} signOut={AuthUser.signOut} />
      <h1 className="title">Welcome to Organize.com!</h1>
      <h2 className="info">Here you can make lists of what jobs or activities you want to do, events you plan on doing, and contacts you want to reach out to.</h2>
      <h2 className="info">You can delete, update, or add to either of these three lists anytime you'd like. So make sure to use this to better schedule your life!</h2>    
          <div className="list-group">
                {allData.map((mydata) => (

                <Link href={`/${mydata.id}`} key={mydata.id} >
                <a className="list-group-item list-group-item-action">{mydata.name}</a>
                </Link>

                ))}
          </div>
          <div className="post" backgroundsize="70" bgcolor="gray">
                <p>I put up a post on my WordPress site</p>
              
          </div>
      <div style={styles.content}>
        <div style={styles.infoTextContainer}>
          <Heading style={{ fontSize: "40px" }}
                                    bgClip="text">Organize.com </Heading>
          <h3 className="infoBox" spacing={2} style={{ marginBottom: "10px" }}> Schedule your contacts, events, and todos to organize your life.</h3>
          
          <p >
          <Link href="/event" textDecoration="none">

          <Button leftIcon={<CalendarIcon />} color="blue"
          background="slateblue"
            fontWeight="bold"
            fontSize="20px"
            py={17}
            variant="outline"
            
            borderRadius="md"
          
            _hover={{
              
            }}  >
          Add an event!
        </Button>

       
        </Link>
        </p>
        <p>
        <Link href="/todo" textDecoration="none">

          <Button leftIcon={<StarIcon />} color="blue"
          background="slateblue"
            fontWeight="bold"
            fontSize="20px"
            variant="outline"
            py={17}
            borderRadius="md"
            textDecoration="none"
            
            _hover={{
              
            }}  >
          Add a todo!
        </Button>
  
        </Link>
        </p>
   
        <p>
        <Link href="/contact" textDecoration="none">

          <Button leftIcon={<PhoneIcon />} color="blue"
          background="slateblue"
            fontWeight="bold"
            fontSize="20px"
            variant="outline"
            borderRadius="md"
            textDecoration="none"
            py={17}
            
            _hover={{
              
            }}  >
          Add a contact!
        </Button>

        </Link>
        </p>
        </div>
      </div>
    </div>
  )
}

export default withAuthUser()(Home)
