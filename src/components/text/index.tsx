import { memo, ComponentPropsWithoutRef, ReactNode } from 'react';
import { sampleInteractor } from '@/core/sampleApi';

type Props = {
  children?: ReactNode;
  hoge?: () => void;
};

type ComponentProps = ComponentPropsWithoutRef<'p'> & Props;

const Text = memo<ComponentProps>(({ ...props }) => {
  const { data } = sampleInteractor.useQuery(1);

  return <p {...props}>{data?.text}</p>;
});

export default Text;
