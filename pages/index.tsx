import AppLayout from '@Components/AppLayout';
import { GetStaticProps } from 'next';
import { homepageSerializer } from '@Serializers/homepageSerializer'
import BlockContent from '@sanity/block-content-to-react';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST_URL + '/api/homepage');

  return {
    props: {
      homepageData: await res.json()
    },
    revalidate: 86400
  }
}

const Homepage = ({ homepageData }: { homepageData: any }) => {
  return (
    <AppLayout title="Homepage">
      {homepageData.map((entry) => {
        return (
          <>
            <BlockContent blocks={entry.body} serializers={homepageSerializer} />
          </>
        )
      })}
    </AppLayout >
  )
}

export default Homepage;