import { memo, ComponentPropsWithoutRef } from 'react';
import { useSampleQuery } from '../../core/sampleApi';

type ComponentProps = ComponentPropsWithoutRef<'p'>;

const Text = memo<ComponentProps>(({ ...props }) => {
  const { data } = useSampleQuery(1);

  return <p {...props}>{data?.text}</p>;
});

export default Text;
