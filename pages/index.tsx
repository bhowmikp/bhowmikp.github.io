import AppLayout from '@Components/AppLayout';
import { GetStaticProps } from 'next';
import { homepageSerializer } from '@Serializers/homepageSerializer'
import BlockContent from '@sanity/block-content-to-react';
import { getHomepageData } from "./api/homepage"

export const getStaticProps: GetStaticProps = async () => {
  const res = await getHomepageData();

  return {
    props: {
      homepageData: res
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