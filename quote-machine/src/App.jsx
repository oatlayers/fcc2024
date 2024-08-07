import { useEffect, useState } from "react";
import { Container, Box } from "@chakra-ui/react";

const Quote = ({ quote, handleClick }) => {
  if (!quote) {
    return null;
  }

  return (
    <div id="quote-box">
      <p id="text">{quote.quote}</p>
      <p id="author">{quote.author}</p>

      <Box as="button" borderRadius="md" bg="green" color="white" px={4} h={8}>
        <a
          href={`https://twitter.com/intent/tweet?text=${quote.quote}`}
          target="_blank"
          id="tweet-quote"
        >
          twitter
        </a>
      </Box>
      <Box
        id="new-quote"
        onClick={handleClick}
        as="button"
        borderRadius="md"
        bg="green"
        color="white"
        px={4}
        h={8}
      >
        new quote
      </Box>
      <div>
        <a href="https://github.com/oatlayers" target="_blank">
          oatlayers
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const [index, setIndex] = useState(null);
  const quoteArray = [
    {
      quote:
        "Here's the teaching point, if you're teaching kids about intelligence and policy: Intelligence does not absolve policymakers of responsibility to ask tough questions, and it doesn't absolve them of having curiosity about the consequences of their actions.",
      author: "George Tenet",
    },
    {
      quote:
        "It is easier to go six miles to hear a sermon, than to spend one quarter of an hour in meditating on it when I come home. ",
      author: "Philip Henry",
    },
    {
      quote:
        "That's all a man can hope for during his lifetime - to set an example - and when he is dead, to be an inspiration for history. ",
      author: "William McKinley",
    },
    {
      quote: "Learn to say 'no' to the good so you can say 'yes' to the best. ",
      author: "John C. Maxwell",
    },
    {
      quote:
        "If we survive danger it steels our courage more than anything else. ",
      author: "Reinhold Niebuhr",
    },
    {
      quote:
        "You don't despair about something like the Middle East, you just do the best you can. ",
      author: "P. J. O'Rourke",
    },
    {
      quote:
        "I found a religion that blended scientific reason with spiritual reality in a unifying faith far removed from the headlines of violence, destruction and terrorism. ",
      author: "Cat Stevens",
    },
  ];

  const getRandomIndex = (length) => {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(length);
    const result = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled
    );
    console.log(result);
    return result;
  };

  useEffect(() => {
    setIndex(getRandomIndex(length));
  }, []);

  const handleClick = () => {
    const length = quoteArray.length;
    setIndex(getRandomIndex(length));
  };

  return (
    <>
      <Container maxW="md" bg="blue.600" centerContent>
        <Box padding="4" bg="blue.400" color="black" maxW="md">
          <Quote quote={quoteArray[index]} handleClick={handleClick} />
        </Box>
      </Container>
    </>
  );
};

export default App;
