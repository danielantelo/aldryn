<?php

namespace AppBundle\Admin\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OrderViewType extends AbstractType
{
    const OPTION_ORDER= 'order';

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefined([self::OPTION_ORDER]);
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        if (isset($options[self::OPTION_ORDER])) {
            $parentData = $form->getParent()->getData();
            $view->vars[self::OPTION_ORDER] = $parentData;
        }
    }
}
