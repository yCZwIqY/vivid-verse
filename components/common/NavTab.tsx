'use client';

import { Chip } from '@nextui-org/chip';
import { useParams, useRouter, useSelectedLayoutSegments } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Locale } from '@/types';

const SENTENCE = 'sentence';
const PARAGRAPH = 'paragraph';

type NavType = 'paragraph' | 'sentence';

export default function NavTab() {
  const { locale } = useParams<{ locale: Locale }>();
  const t = useTranslations('nav');
  const router = useRouter();
  const segment = useSelectedLayoutSegments();
  const isDisabled = (value: NavType) => {
    return segment.includes(value);
  };

  const onClick = (value: NavType) => {
    router.push(`/${locale}/text/${value}`);
  };

  return (
    <nav className={'my-8 flex gap-2 max-md:justify-center max-sm:mt-20'}>
      <Chip
        className={'cursor-pointer px-5'}
        color={'secondary'}
        isDisabled={isDisabled(SENTENCE)}
        size={'lg'}
        onClick={() => onClick(SENTENCE)}
      >
        {t('sentence')}
      </Chip>
      <Chip
        className={'cursor-pointer px-5'}
        color={'secondary'}
        isDisabled={isDisabled(PARAGRAPH)}
        size={'lg'}
        onClick={() => onClick(PARAGRAPH)}
      >
        {t('paragraph')}
      </Chip>
    </nav>
  );
}
