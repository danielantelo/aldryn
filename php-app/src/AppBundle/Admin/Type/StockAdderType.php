<?php

namespace AppBundle\Admin\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StockAdderType extends AbstractType
{
    const OPTION_PRODUCT = 'product';

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefined([self::OPTION_PRODUCT]);
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        if (isset($options[self::OPTION_PRODUCT])) {
            $parentData = $form->getParent()->getData();
            $view->vars[self::OPTION_PRODUCT] = $parentData;
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getParent()
    {
        return TextType::class;
    }
}