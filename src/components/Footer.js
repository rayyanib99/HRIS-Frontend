import styled from 'styled-components';
import image from './Logo.png';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { BiCopyright } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Container = styled.div
    `display: flex;
     align-items: center;
     justify-content: center;
     background-color: #ABB0B8;
    `

const Left = styled.div
    `flex: 1;
     display: flex;
     flex-direction: column;
     padding: 20px;
    `

const Logo = styled.h1
    `display: flex;
     align-items: center;
     font-size: 27px;
    `

const Image = styled.img
    `height: 4vh;
     width: 2vw;
     margin-right: 5px;
    `

const Description = styled.p
    `margin: 20px 0px;`

const SocialContainer = styled.div
    `display: flex;`

const SocialIcon = styled.div
    `width: 40px;
     height: 40px;
     border-radius: 50%;
     background-color: #${props => props.color};
     color: white;
     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-right: 20px;
    `

const Center = styled.div
    `flex: 1;
     padding: 20px;
    `

const Title = styled.h3
    `margin-bottom: 30px;
     font-size: 27px;
    `

const List = styled.ul
    `margin: 0;
     padding: 0;
     list-style: none;
     display: flex;
     flex-wrap: wrap;
    `

const ListItem = styled.li
    `width: 50%;
     margin-bottom: 10px;
     &:hover
     {
        text-decoration: underline;
     }
    `

const Right = styled.div
    `flex: 1;
     padding: 20px;
    `

const ContactItem = styled.div
    `margin-bottom: 20px;
     display: flex;
     align-items: center;
    `

const Footer = () => 
{
  const today = new Date();

  const Mailto = ({ email, subject = '', body = '', children }) => 
  {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''} body =${encodeURIComponent(body)}`;
  
    return <a href = {`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <Container>
        <Left>
            <Logo><Image src = {image} /> HRIS Management</Logo>
            <Description>
                Check us out on:
            </Description>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <BsFacebook />
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <BsTwitter />
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <BsInstagram />
                </SocialIcon>
                <SocialIcon color = "fff">
                    <Mailto email = "hrisraykam@gmail.com" subject = "Issue Ticket" body = "">
                        <MdOutlineMail style = {{color: "black", display: "flex", justifyContent: "center", alignItems: "center"}} size = {20}/>
                    </Mailto>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem><Link to = "/" style = {{textDecoration: "none", color: "black"}}>Home</Link></ListItem>
                <ListItem><Link to = "/aboutus" style = {{textDecoration: "none", color: "black"}}>About Us</Link></ListItem>
                <ListItem><Link to = "/getstarted" style = {{textDecoration: "none", color: "black"}}>Get Started</Link></ListItem>
                <ListItem><Link to = "/register" style = {{textDecoration: "none", color: "black"}}>Register</Link></ListItem>
                <ListItem><Link to = "/login" style = {{textDecoration: "none", color: "black"}}>Sign-In</Link></ListItem>
                <ListItem><Link to = "/ats/add" style = {{textDecoration: "none", color: "black"}}>Apply</Link></ListItem>
                <ListItem><Link to = "/support" style = {{textDecoration: "none", color: "black"}}>Support</Link></ListItem>
                <ListItem><Link to = "/help" style = {{textDecoration: "none", color: "black"}}>Help</Link></ListItem>
                <ListItem><Link to = "/privacypolicy" style = {{textDecoration: "none", color: "black"}}>Privacy Policy</Link></ListItem>
                <ListItem><Link to = "/termsandconditions" style = {{textDecoration: "none", color: "black"}}>Terms and Conditions</Link></ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem style = {{marginBottom: 32}}><FaMapMarkerAlt style = {{marginRight: 10}} /> 123 Project Dr. Cary, North Carolina, USA 12345</ContactItem>
            <ContactItem style = {{marginBottom: 32}}><FaPhoneAlt style = {{marginRight: 10}} /> +1 (123)-456-7890</ContactItem>
            <ContactItem style = {{marginBottom: 32}}><FiMail style = {{marginRight: 10}} />
                <Mailto email = "hrisraykam@gmail.com" subject = "Issue Ticket" body = "">
                    hrisraykam@gmail.com
                </Mailto>
            </ContactItem>
            <ContactItem><BiCopyright style = {{marginRight: 10}} size = {20} /><em>{today.getFullYear()} HRIS Management. All Rights Reserved.</em></ContactItem>
        </Right>
    </Container>
  )
}

export default Footer;