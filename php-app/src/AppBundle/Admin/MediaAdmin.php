<?php

namespace AppBundle\Admin;

use AppBundle\Admin\Type\MediaPreviewType;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Form\FormMapper;

class MediaAdmin extends AbstractAdmin
{
    /**
     * @var mixed
     */
    private $parentObject;

    protected function configureFormFields(FormMapper $formMapper)
    {
        // check if it is embedded
        if ($this->hasParentFieldDescription()) {
            $object = $this->getCurrentObjectFromCollection($this);
            $this->parentObject = $this->getParentFieldDescription()->getAdmin()->getSubject();
        } else {
            $object = $this->getSubject();
        }
        
        $formMapper
            ->add('product', null, [
                'label' => '',
                'required' => false,
            ])
            ->add('title', 'text', [
                'required' => true,
                'label' => 'media.fields.title',
            ])
            ->add('type', 'choice', [
                'required' => true,
                'label' => 'media.fields.type',
                'choices' => ['image' => 'image', 'video' => 'video', 'doc' => 'doc']
            ])           
            ->add('file', 'file', [
                'required' => false,
                'label' => 'media.fields.file',
            ])
            ->add('preview', MediaPreviewType::class, [
                'required' => false,
                'mapped' => false,
                'label' => 'media.fields.preview',
                'path' => $object ? $object->getPath() : null
            ])
        ;
    }

    protected function getCurrentObjectFromCollection($adminChild)
    {
        $getter = 'get' . $adminChild->getParentFieldDescription()->getFieldName();
        $parent = $adminChild->getParentFieldDescription()->getAdmin()->getSubject();
        $collection = $parent->$getter();
        $session = $adminChild->getRequest()->getSession();
        $number = 0;
        if ($session->get('adminCollection')) {
            $number = $session->get('adminCollection');
            $session->remove('adminCollection');
        } else {
            $session->set('adminCollection', 1 - $number);
        }

        return $collection[$number];
    }

    public function prePersist($media)
    {
        $this->manageFileUpload($media);
    }

    public function preUpdate($media)
    {
        $this->manageFileUpload($media);
    }

    private function manageFileUpload($media)
    {
        if ($media->getFile()) {
            $media->refreshUpdated();
        }
    }    
}
