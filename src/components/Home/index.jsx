import React,{Component} from 'react';
import './home.css'
import {
  Button,
  Container,
  Menu,
  Segment,
} from 'semantic-ui-react';

class Home extends Component{
  render () {
    return (
          <Segment
            inverted
            textAlign='center'
            className='main-segment'
            vertical
          >
            <Menu
              fixed
              inverted
              pointing
              secondary
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Products</Menu.Item>
                <Menu.Item as='a'>Sales</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' primary>
                    Log in
                  </Button>
                  <Button as='a' primary  className='sign-up-btn'>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <Container>
              <div className='main-title'>
              <p>Store Manager</p>
                <h2>Perfect solution for your store operations</h2>
              </div>
            </Container>
          </Segment>
    )
  }

}
export default Home;