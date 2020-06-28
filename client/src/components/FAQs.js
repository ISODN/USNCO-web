import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Card, Accordion, Button } from 'react-bootstrap';
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

const FAQs = (props) => {
	const [FAQs, setFAQs] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:3001/api/user/get_faq`) 
			.then(res => {setFAQs(res.data)});
	}, []);

	//<div dangerouslySetInnerHTML={{__html: md.render(about)}}/>
	return (
		<Accordion>
			{
				FAQs.map(item => {
					return(
						<Card>
							<Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
								<p class='btn-link mb-0'>
									{item.question}
								</p>
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="0">
								<Card.Body>
									{item.answer}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					)
				})
			}
			
		</Accordion>
	)
}

export default FAQs;