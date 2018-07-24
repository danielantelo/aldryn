<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SetOrderAddressesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $user = $options['user'];

        $builder
            ->add('deliveryAddress', ChoiceType::class, [
                'label' => 'Dirección de envío',
                'choices' => $user ? $user->getAddresses() : [],
                'choice_label' => function($address, $key, $index) {
                    return $address->__toString();
                },
                'choice_value' => function ($address = null) {
                    return $address ? $address->getId() : '';
                },
            ])
            // ->add('invoiceAddress', ChoiceType::class, [
            //     'label' => 'Dirección de facturación',
            //     'choices' => $user ? [$user->getInvoiceAddress()] : [],
            //     'choice_label' => function($address, $key, $index) {
            //         return $address->__toString();
            //     },
            //     'choice_value' => function ($address = null) {
            //         return $address ? $address->getId() : '';
            //     },
            // ])
            ->add('continue', SubmitType::class, array('label' => 'Continuar'))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => 'AppBundle\Form\Model\SetOrderAddresses',
            'user' => null,
        ]);
    }

    public function getName()
    {
        return 'set_order_address';
    }
}
