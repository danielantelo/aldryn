<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SetOrderAddressesType extends AbstractType
{
    public static $KEY_NEW = 'new';

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $user = $options['user'];

        $builder
            ->add('deliveryAddress', ChoiceType::class, [
                'label' => 'Dirección de envío',
                'placeholder' => 'Seleccione un dirección...',
                'choices' => $user ?
                    array_merge($user->getAddresses()->toArray(), ['Crear Nueva'])
                    : [],
                'choice_label' => function($address, $key, $index) {
                    return is_string($address) ? $address : $address->__toString();
                },
                'choice_value' => function ($address = null) {
                    return $address && !is_string($address) ? $address->getId() : self::$KEY_NEW;
                },
            ])
            ->add('customDeliveryAddress', AddressType::class, [
                'label' => ' ',
                'required' => false
            ])
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
