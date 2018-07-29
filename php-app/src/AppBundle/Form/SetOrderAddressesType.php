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
    public static $KEYS = [
        'Crear Nueva' => 'new'
    ];

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $user = $options['user'];

        $builder
            ->add('deliveryAddress', ChoiceType::class, [
                'label' => 'Dirección de envío',
                'data' => '',
                'choices' => $user ?
                    array_merge(['Seleccione una dirección...'], $user->getAddresses()->toArray(), ['Crear Nueva'])
                    : [],
                'choice_label' => function($address, $key, $index) {
                    return is_string($address) ? $address : "{$address->getName()} {$address->__toString()}";
                },
                'choice_value' => function ($address = null) {
                    if ($address && !is_string($address)) {
                        return $address->getId();
                    } else if (isset(self::$KEYS[$address])) {
                        return self::$KEYS[$address];
                    }

                    return '';
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
