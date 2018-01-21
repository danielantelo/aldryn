<?php

namespace AppBundle\Admin\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MediaPreviewType extends AbstractType
{
    const OPTION_MEDIA_PATH = 'path';
    const OPTION_MEDIA_TYPE = 'type';

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefined([self::OPTION_MEDIA_PATH]);
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        if (isset($options[self::OPTION_MEDIA_PATH])) {
            $parentData = $form->getParent()->getData();
            $path = null;
            if (null !== $parentData) {
                $accessor = PropertyAccess::createPropertyAccessor();
                $path = $accessor->getValue($parentData, self::OPTION_MEDIA_PATH);
                $type = $accessor->getValue($parentData, self::OPTION_MEDIA_TYPE);
            }

            $view->vars[self::OPTION_MEDIA_PATH] = $path;
            $view->vars[self::OPTION_MEDIA_TYPE] = $type;
        }
    }    
}
