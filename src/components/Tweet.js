import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Flex } from '@rebass/emotion';

export function Tweet({ tweetId }) {
  return (
    <Flex alignItems="center" justifyContent="center">
      <TwitterTweetEmbed tweetId={tweetId} />
    </Flex>
  );
}
