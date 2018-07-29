<?php

namespace AppBundle\Form;

use AppBundle\Service\LocalizationHelper;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddressType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', 'text', [
                'label' => 'address.fields.name',
            ])
            ->add('streetNumber', 'text', [
                'label' => 'address.fields.streetNumber',
            ])
            ->add('streetName', 'text', [
                'label' => 'address.fields.streetName',
            ])
            ->add('city', 'text', [
                'label' => 'address.fields.city',
            ])
            ->add('zipCode', 'text', [
                'label' => 'address.fields.zipCode',
            ])
            ->add('country', 'choice', [
                'label' => 'address.fields.country',
                'data' => 'España',
                'choices' => LocalizationHelper::getCountries(),
                'choices_as_values' => true
            ])
            ->add('telephone', 'text', [
                'label' => 'address.fields.telephone',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => 'AppBundle\Entity\Address',
        ]);
    }

    public function getName()
    {
        return 'address';
    }
}
